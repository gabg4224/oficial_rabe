import { useRouter } from "next/router";

export function ButtonCreateProduct() {
    const router = useRouter()
  return (
    <>
      <div className="pb-3 flex">
        <button
          onClick={() => router.push("/admin/createProduct")}
          className=" bg-green-500 text-white font-bold py-2 px-4 rounded flex"
        >
          + create
        </button>
      </div>
    </>
  );
}
