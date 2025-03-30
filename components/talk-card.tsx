import { ITalk } from "@/interfaces/types";
import Image from "next/image";
import { useState } from "react";

const TalkCard = ({ talk }: { talk: ITalk }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1 text-[#0ea5e9]">{talk.title}</h2>
          <p className="text-gray-400 text-sm">
            {talk.event} - {talk.date}
          </p>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            {talk.description}
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href={talk.slides}
              className="underline hover:underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Slides
            </a>
            {talk.recording && (
              <a
                href={talk.recording}
                className="underline hover:underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recording
              </a>
            )}
            {talk.keynote && (
              <a
                href={talk.keynote}
                className="underline hover:underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Keynote
              </a>
            )}
          </div>
        </div>

        {/* Talk Poster */}
        {talk.poster && (
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={talk.poster}
              alt={`${talk.title} Poster`}
              width={100}
              height={100}
              className="rounded-lg cursor-pointer object-cover"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        )}
      </div>

      {/* Modal for full-size image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative p-4">
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <img
              src={talk.poster}
              alt="Talk Poster"
              className="max-w-full max-h-[80vh] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TalkCard;
