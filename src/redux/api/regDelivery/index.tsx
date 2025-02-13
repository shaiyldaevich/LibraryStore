import { api as index } from "..";

const api = index.injectEndpoints({
    endpoints: (build) => ({
        getRegDelivery: build.query<
            REGDELIVERY.GetRegDeliveryResponse,
            REGDELIVERY.GetRegDeliveryRequest
        >({
            query: () => ({
                url: `delivery-list`,
                method: "GET",
            }),
            providesTags: ["regdelivery"],
        }),
        postRegDelivery: build.mutation<
            REGDELIVERY.PostRegDeliveryResponse,
            REGDELIVERY.PostRegDeliveryResponse
        >({
            query: (request) => ({
                url: `create_delivery`,
                method: "POST",
                body: request,
            }),
            invalidatesTags: ["regdelivery"],
        }),
    }),
});

export const { useGetRegDeliveryQuery, usePostRegDeliveryMutation } = api;
