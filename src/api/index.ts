import { CardProps } from '../constants/CardProps';

export const fetchArtworks = async (query: string, page: number, limit: number) => {
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

export const fetchShortArtworkInfo = async (id: number): Promise<CardProps | null> => {
  try {
    const url = new URL(`https://api.artic.edu/api/v1/artworks/${id}`);
    url.searchParams.append('fields', 'id,title,artist_title,is_public_domain,image_id');
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    return {
      artworkId: id,
      title: data.data.title,
      author: data.data.artist_title || 'Unknown',
      image: `https://www.artic.edu/iiif/2/${data.data.image_id}/full/800,/0/default.jpg`,
      status: data.data.is_public_domain ? 'Public' : 'Private',
    };
  } catch (error) {
    console.error('Error fetching artwork:', error);
    return null;
  }
};
