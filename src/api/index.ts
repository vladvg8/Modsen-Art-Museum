import { CardProps } from 'constants/CardProps';

export const fetchArtworks = async (
  query: string,
  page: number,
  limit: number,
  sort: string | null,
  signal?: AbortSignal
) => {
  const url = new URL('https://api.artic.edu/api/v1/artworks/search');
  url.searchParams.append('q', query);
  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());
  if (sort) {
    url.searchParams.append('sort', sort);
  }

  try {
    const response = await fetch(url.toString(), { signal });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const artworksId = data.data.map((item: any) => ({ id: item.id }));

    return {
      totalPages: data.pagination.total_pages,
      artworksId,
    };
  } catch (error) {
    console.error('Error fetching artworks:', error);
    return undefined;
  }
};

export const fetchShortArtworkInfo = async (
  id: number,
  signal?: AbortSignal
): Promise<CardProps | null> => {
  try {
    const infoUrl = new URL(`https://api.artic.edu/api/v1/artworks/${id}`);
    infoUrl.searchParams.append(
      'fields',
      'id,title,artist_title,is_public_domain,image_id'
    );

    const infoResponse = await fetch(infoUrl.toString(), { signal });
    if (!infoResponse.ok) {
      throw new Error(
        `Error: ${infoResponse.status} ${infoResponse.statusText}`
      );
    }

    const infoData = await infoResponse.json();
    const imageId = infoData.data.image_id;

    let imageObjectURL: string | undefined = undefined;

    if (imageId) {
      const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/800,/0/default.jpg`;
      const imageResponse = await fetch(imageUrl, { signal });
      if (imageResponse.ok) {
        const imageBlob = await imageResponse.blob();
        imageObjectURL = URL.createObjectURL(imageBlob);
      }
    }

    return {
      artworkId: id,
      title: infoData.data.title,
      author: infoData.data.artist_title || 'Unknown',
      image: imageObjectURL,
      status: infoData.data.is_public_domain ? 'Public' : 'Private',
    };
  } catch (error) {
    console.error('Error fetching artworks:', error);
    return null;
  }
};

export const fetchArtwork = async (id: number) => {
  try {
    const url = new URL(`https://api.artic.edu/api/v1/artworks/${id}`);
    url.searchParams.append(
      'fields',
      'title,artist_title,date_start,date_end,place_of_origin,dimensions,credit_line,image_id,is_public_domain,department_title'
    );

    const response = await fetch(url.toString());
    const data = await response.json();

    if (!data.data) {
      console.error('Artwork not found');
      throw new Error('Data field not found');
    }

    const artwork = data.data;

    let dateRange = null;
    if (artwork.date_start && artwork.date_end) {
      const startYear = artwork.date_start;
      const endYear = artwork.date_end;
      if (startYear === endYear) {
        dateRange = `${startYear}`;
      } else {
        const startYearString = startYear.toString();
        const endYearString = endYear.toString();
        if (startYearString.slice(0, 2) === endYearString.slice(0, 2)) {
          dateRange = `${startYear}-${endYearString.slice(-2)}`;
        } else {
          dateRange = `${startYear}-${endYear}`;
        }
      }
    } else if (artwork.date_start) {
      dateRange = `${artwork.date_start}`;
    } else if (artwork.date_end) {
      dateRange = `${artwork.date_end}`;
    }
    let imageBlob = null;
    if (artwork.image_id) {
      const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
      const imageResponse = await fetch(imageUrl);
      if (imageResponse.ok) {
        imageBlob = await imageResponse.blob();
      }
    }
    return {
      id: id,
      title: artwork.title || 'Unknown',
      artist_title: artwork.artist_title || 'Unknown',
      date_range: dateRange,
      place_of_origin: artwork.place_of_origin || 'Unknown',
      dimensions: artwork.dimensions || 'Unknown',
      department_title: artwork.department_title || 'Unknown',
      credit_line: artwork.credit_line || 'Unknown',
      image: imageBlob,
      is_public_domain: artwork.is_public_domain,
    };
  } catch (error) {
    console.error('Error fetching artwork:', error);
    return null;
  }
};