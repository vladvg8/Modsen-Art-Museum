import { CardProps } from '../constants/CardProps';

export const fetchArtworks = async (
  query: string,
  page: number,
  limit: number
) => {
  const url = new URL('https://api.artic.edu/api/v1/artworks/search');
  url.searchParams.append('q', query);
  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    const artworksId = data.data.map((item: any) => ({
      id: item.id,
    }));

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
  id: number
): Promise<CardProps | null> => {
  try {
    const infoUrl = new URL(`https://api.artic.edu/api/v1/artworks/${id}`);
    infoUrl.searchParams.append(
      'fields',
      'id,title,artist_title,is_public_domain,image_id'
    );

    const infoResponse = await fetch(infoUrl.toString());
    if (!infoResponse.ok) {
      throw new Error(`Error: ${infoResponse.status} ${infoResponse.statusText}`);
    }

    const infoData = await infoResponse.json();
    const imageId = infoData.data.image_id;

    let imageObjectURL: string | undefined = undefined;

    if (imageId) {
      const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/800,/0/default.jpg`;
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        throw new Error(
          `Error fetching image: ${imageResponse.status} ${imageResponse.statusText}`
        );
      }
      const imageBlob = await imageResponse.blob();
      imageObjectURL = URL.createObjectURL(imageBlob);
    }

    return {
      artworkId: id,
      title: infoData.data.title,
      author: infoData.data.artist_title || 'Unknown',
      image: imageObjectURL,
      status: infoData.data.is_public_domain ? 'Public' : 'Private',
    };
  } catch (error) {
    console.error('Error fetching artwork:', error);
    return null;
  }
};