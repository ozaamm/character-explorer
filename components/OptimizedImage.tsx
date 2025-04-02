"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import styles from './optimized-image.module.css';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    className?: string;
    sizes?: string;
}

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    fill,
    className = '',
    sizes = '100vw' // Default value
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Reset loading state when the src changes
        setIsLoading(true);
        
        const checkImageLoad = () => {
            if (imageRef.current) {
                const imgElement = imageRef.current;
                if (imgElement.complete && imgElement.naturalWidth > 0) {
                    setIsLoading(false);
                }
            }
        };

        // Check immediately and after a short delay
        checkImageLoad();
        const timer = setTimeout(checkImageLoad, 100);
        
        // Add a load event listener to handle cases where loading takes longer than 100ms
        const handleLoad = () => setIsLoading(false);
        const handleError = () => setIsLoading(false); // Also handle errors
        
        const imgElement = imageRef.current;
        if (imgElement) {
            imgElement.addEventListener('load', handleLoad);
            imgElement.addEventListener('error', handleError);
        }
        
        return () => {
            clearTimeout(timer);
            // Clean up the event listeners
            if (imgElement) {
                imgElement.removeEventListener('load', handleLoad);
                imgElement.removeEventListener('error', handleError);
            }
        };
    }, [src]);

    return (
        /* 
        Conditionally apply wrapper styles only when not using 'fill' prop
        - For fixed-size images (like thumbnails), use default wrapper
        - For fill images, skip wrapper to prevent extra styling
        */
        <div className={fill ? className : `${styles.imageWrapper} ${className}`}>
            {isLoading && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.spinner}></div>
                </div>
            )}
            <Image
                ref={imageRef}
                src={src}
                alt={alt}
                width={width}
                height={height}
                fill={fill}
                sizes={sizes}
                style={{
                    opacity: isLoading ? 0 : 1,
                    objectFit: fill ? 'contain' : undefined,
                    objectPosition: fill ? 'center' : undefined
                }}
                priority
            />
        </div>
    );
}