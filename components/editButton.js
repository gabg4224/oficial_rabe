import { useRouter } from 'next/router';

function EditButton({ productId }) {
  const router = useRouter();

  const handleEdit = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'GET'
      });

      if (response.ok) {
        router.push(`/admin/${productId}`); // Redirige a la página de productos después de eliminar
      } else {
        console.error('Error al eliminar el producto');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleEdit}className="bg-blue-500 text-white px-4 py-2 rounded-md">
      Edit
    </button>
  );
}

export default EditButton;