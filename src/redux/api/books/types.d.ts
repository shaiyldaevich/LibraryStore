namespace Books {
    type GetBooksResponse = [
        {
            isDiscountBook: boolean;
            id: number;
            book_images: Array<{
                book_images: string;
            }>;
            book_name: string;
            author: string;
            price: number;
            discount: number;
            description: string;
            average_rating: number;
            total_ratings: number;
            janre: Array<{
                janre_name: string;
            }>;
        }
    ];
    type GetBooksDetailResponse = {
        id: number;
        book_images: Array<{
            book_images: string;
        }>;
        book_name: string;
        author: string;
        price: number;
        discount: number;
        description: string;
        average_rating: number;
        total_ratings: number;
        janre: Array<{
            janre_name: string;
        }>;
    };

    type GetBooksResponse = GetBooksResponse[];

    type GetBooksRequest = void;

    type GetBooksDetailResponse = GetBooksDetailResponse;

    type GetBooksDetailRequest = number;
}
