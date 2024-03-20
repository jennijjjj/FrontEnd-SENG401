export function ImageReader({ imagePath }) {
    if (imagePath) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(imagePath);

            reader.onload = () => {
                const imageDataUrl = reader.result;
                const imageInfo = {
                    dataUrl: imageDataUrl,
                    file: {
                        name: imagePath.name,
                        size: imagePath.size,
                        type: imagePath.type,
                        lastModifiedDate: imagePath.lastModifiedDate
                    }
                };
                resolve(imageInfo);
            };

            reader.onerror = () => {
                reject(new Error('Error reading file'));
            };
        });
    } else {
        return Promise.reject(new Error('No image path provided'));
    }
}
