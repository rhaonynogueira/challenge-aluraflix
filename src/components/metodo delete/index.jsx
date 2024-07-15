export async function deleteVideo(id, updateFunction) {
    try {
        const response = await fetch(`http://localhost:3000/videos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('A resposta da rede não está ok');
        }

        updateFunction();

        return true;
    } catch (error) {
        console.error('Houve um problema com a operação de busca:', error);
        return false;
    }
}
