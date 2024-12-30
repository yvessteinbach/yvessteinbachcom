"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../utils/supabase";

interface ItemDetails {
    id: string;
    title: string;
    cover: string;
    created_at: string;
    c_image_1?: string;
    c_image_2?: string;
    c_image_3?: string;
    c_image_4?: string;
}

export default function ItemDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const [item, setItem] = useState<ItemDetails | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchItemDetails = async (id: string) => {
        try {
            setLoading(true);

            const { data, error } = await supabase
                .from("collections")
                .select("*")
                .eq("id", id)
                .single();

            if (error) throw error;
            setItem(data);
        } catch (error) {
            console.error("Error fetching item details:", error);
            router.push("/collections"); // Redirect to collections on error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const id = Array.isArray(params.id) ? params.id[0] : params.id;
        if (id) {
            fetchItemDetails(id);
        }
    }, [params]);

    if (loading) return <p>Loading...</p>;
    if (!item) return <p>Item not found</p>;

    return (
        <div className="container">
            <div className="item">
                <div className="item__details">
                    <img src={item.cover} />
                    <div className="details__text">
                        <div className="create">{new Date(item.created_at).toLocaleDateString()}</div>
                        <div className="title">{item.title}</div>
                    </div>
                </div>
                <div className="item__gallery">
                    {item.c_image_1 && <img src={item.c_image_1} alt="Image 1" />}
                    {item.c_image_2 && <img src={item.c_image_2} alt="Image 2" />}
                    {item.c_image_3 && <img src={item.c_image_3} alt="Image 3" />}
                    {item.c_image_4 && <img src={item.c_image_4} alt="Image 4" />}
                </div>
            </div>
        </div>
    );
}