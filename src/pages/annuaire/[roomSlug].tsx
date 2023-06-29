import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchOneRoom } from "../../utils/fetchRoom";
import { Room } from "../../../typings";
import Header from "@/components/Header";
import { urlFor } from "@/sanity";

const RoomDetailPage = () => {
  const router = useRouter();
  const roomSlug = Array.isArray(router.query.roomSlug)
    ? router.query.roomSlug[0]
    : router.query.roomSlug;

  useEffect(() => {
    const fetchRoom = async () => {
      if (roomSlug) {
        const roomData = await fetchOneRoom(roomSlug);
        setRoom(roomData);
      }
    };

    fetchRoom();
  }, [roomSlug]);

  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    const fetchRoom = async () => {
      if (roomSlug) {
        const roomData = await fetchOneRoom(roomSlug);
        setRoom(roomData);
      }
    };

    fetchRoom();
  }, [roomSlug]);

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col w-[676px] text-white">
        <img
          src={urlFor(room.image).url()}
          className="mb-2"
          width={500}
          height={374}
          alt="card"
        />
        <p>{room.description}</p>
      </div>
    </div>
  );
};

export default RoomDetailPage;
