export async function submitBooking(data) {
    try {
        // Dummy API sementara (nanti ganti dengan URL backend)
        const response = await fetch("https://example.com/api/booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Gagal mengirim data!");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return { success: false, message: error.message };
    }
}
