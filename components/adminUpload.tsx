"use client";

import React, { useState } from "react";
import { db, collection, addDoc } from "../utils/firebase";

export default function AdminUpload() {
    const [title, setTitle] = useState("");
    const [coverUrl, setCoverUrl] = useState(""); // Store the cover image URL
    const [additionalImages, setAdditionalImages] = useState<string[]>(["", "", "", ""]); // Store up to 4 additional image URLs
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !coverUrl) {
            alert("Title and Cover Image URL are required!");
            return;
        }

        setLoading(true);

        try {
            await addDoc(collection(db, "collections"), {
                title,
                cover: coverUrl,
                created_at: new Date().toISOString(),
                c_image_1: additionalImages[0] || null,
                c_image_2: additionalImages[1] || null,
                c_image_3: additionalImages[2] || null,
                c_image_4: additionalImages[3] || null,
            });

            alert("Item added successfully!");
            setTitle("");
            setCoverUrl("");
            setAdditionalImages(["", "", "", ""]); // Reset fields
        } catch (error) {
            console.error("Error adding document:", error);
            alert("Failed to upload.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload__container">
            <form onSubmit={handleSubmit} className="upload__form">
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Collection Title"
                />

                <label>Cover Image:</label>
                <input
                    type="text"
                    value={coverUrl}
                    onChange={(e) => setCoverUrl(e.target.value)}
                    placeholder="Cover Image URL"
                    required
                />
                {coverUrl && <img src={coverUrl} alt="Cover Preview" className="preview-image" />}

                <label>Additional Image URLs (Max 4):</label>
                {additionalImages.map((url, index) => (
                    <input
                        key={index}
                        type="text"
                        value={url}
                        onChange={(e) => {
                            const newImages = [...additionalImages];
                            newImages[index] = e.target.value;
                            setAdditionalImages(newImages);
                        }}
                        placeholder={`Image ${index + 1} URL`}
                    />
                ))}

                <button className="button" type="submit" disabled={loading}>{loading ? "Uploading..." : "Create Collection"}</button>
            </form>
        </div>
    );
}