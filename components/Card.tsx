"use client";
import Link from "next/link";

export interface ICardProps {
  id: string;
  title: string;
  description: string;
}

export default function Card({ id, title, description }: ICardProps) {
  const handleDelete = async () => {
    await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="p-3 bg-slate-300 text-black ">
      <div>
        <p className="text-3xl">{title}</p>
        <div>
          <button onClick={handleDelete}>Delete</button>
          <Link href={`/editTopic/${id}`}>Edit</Link>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
