import { useRouter } from 'next/router';

function DeleteButton({ productId }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        router.push('/admin'); // Redirige a la página de productos después de eliminar
      } else {
        console.error('Error al eliminar el producto');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md">
      Delete
    </button>
  );
}

export default DeleteButton;