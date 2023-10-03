import React from "react";
import Card from "./Card";
const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};
const TopicList = async () => {
  const { topics } = await getTopics();
  console.log(topics, "TOPICS");
  return (
    <div className="flex flex-col gap-2">
      {topics?.map(({ title, description, _id }: any) => (
        <Card id={_id} description={description} title={title} key={_id} />
      ))}
    </div>
  );
};

export default TopicList;
