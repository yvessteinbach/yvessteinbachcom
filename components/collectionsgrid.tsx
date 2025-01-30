"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../utils/supabase";
import { gsap } from "gsap";

interface ImageItem {
    id: string;
    title: string;
    cover: string;
}

export default function MasonicGrid() {
    const [images, setImages] = useState<ImageItem[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const fetchImages = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("collections")
                .select("id, title, cover");

            if (error) throw error;

            const newImages: ImageItem[] = (data || []).map((item: any) => ({
                id: item.id,
                title: item.title,
                cover: item.cover,
            }));

            setImages(newImages);
        } catch (error) {
            console.error("Error fetching images:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    useEffect(() => {
        const gridItems = document.querySelectorAll(".grid__item");

        gridItems.forEach((item) => {
            const title = item.querySelector(".grid__item__title");
            const image = item.querySelector(".grid__item__cover img");

            item.addEventListener("mouseenter", () => {
                gsap.set(item, { cursor: "pointer" });

                gsap.to(title, {
                    visibility: "visible",
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power1.out",
                });

                gsap.to(image, {
                    filter: "brightness(0.5)",
                    duration: 0.2,
                    ease: "power1.out",
                });
            });

            item.addEventListener("mouseleave", () => {
                gsap.set(item, { cursor: "default" });

                gsap.to(title, {
                    visibility: "hidden",
                    y: 20,
                    duration: 0.2,
                    ease: "power1.in",
                    onComplete: () => {
                        gsap.set(title, { visibility: "hidden" });
                    },
                });

                gsap.to(image, {
                    filter: "brightness(1)",
                    duration: 0.1,
                    ease: "power1.in",
                });
            });
        });
    }, [images]);

    return (
        <div className="container">
            <div className="grid">
                {images.map((img) => (
                    <div
                        className="grid__item"
                        key={img.id}
                        onClick={() => router.push(`/collections/${img.id}`)} // Navigate to `/collections/id`
                    >
                        <div className="grid__item__cover">
                            <img src={img.cover} alt={img.title} />
                        </div>
                        <div className="grid__item__title">{img.title}</div>
                    </div>
                ))}
            </div>

            {loading && <p>Loading...</p>}
        </div>
    );
}
