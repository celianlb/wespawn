import { Room } from '../../typings';

export const fetchAllRoom = async (): Promise<Room[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllRoom`
  );
  const { rooms } = await res.json();
  return rooms;
};


export const fetchOneRoom = async (slug: string): Promise<Room> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getOneRoom?slug=${slug}`
  );
  const { room } = await res.json();
  return room;
};



export const fetchRoomAscPrice = async (): Promise<Room[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getRoomAscPrice`
  );
  const { roomAscPrice } = await res.json();
  return roomAscPrice;
}