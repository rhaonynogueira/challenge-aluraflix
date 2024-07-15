export const updateVideo = async (id, video) => {
    try {
        const response = await fetch(`http://localhost:3000/videos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video),
        });

        if (response.ok) {
            console.log('Video atualizado com sucesso');
            return true;
        } else {
            console.error('Falha ao atualizar o video');
            return false;
        }
    } catch (error) {
        console.error('Erro ao atualizar o video:', error);
        return false;
    }
};
