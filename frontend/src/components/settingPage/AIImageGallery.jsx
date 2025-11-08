import { Check, Upload } from "lucide-react";
import React, { useState } from "react";

const AIImageGallery = () => {
  const [aiName, setAiname] = useState("");
  const [selectedIamge, setSelectedImage] = useState("");
  const [img, setImg] = useState(null);

  const images = [
    "https://img.freepik.com/premium-vector/yellow-robot_667648-1123.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-vector/cartoon-drawing-robot-with-blue-head-blue-eyes_1380826-32.jpg?semt=ais_hybrid&w=740&q=80",
    "https://i.pinimg.com/736x/9c/21/95/9c2195094a81095f87e83cb5534ee121.jpg",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(aiName);
    setAiname("");
  };

  const handleImageSubmit = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      console.error("No file selected");
      return;
    }
    setImg(file);
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="bg-zinc-100 pt-10 lg:h-screen h-full">
      <div className="flex justify-center flex-col px-10 items-center">
        <form
          onSubmit={handleSubmit}
          className="flex h-12 w-full max-w-md items-center gap-2 overflow-hidden rounded-full border border-gray-500/30 bg-white"
        >
          <input
            type="text"
            placeholder="Enter your AI assistant name"
            value={aiName}
            onChange={(e) => setAiname(e.target.value)}
            className="h-full bg-transparent w-full pl-6 text-sm placeholder-gray-500 outline-none"
            required
          />
          {aiName.trim().length > 0 && selectedIamge && (
            <button
              type="submit"
              className="mr-1 h-10 w-56 rounded-full bg-green-500 text-sm text-white transition active:scale-95"
            >
              Next
            </button>
          )}
        </form>

        <h1 className="text-3xl font-semibold pt-8 text-center mx-auto">
          Selecte Your{" "}
          <span className="font-bold text-green-500">AI Assistant</span>
        </h1>

        <div className="flex flex-wrap lg:justify-start items-center justify-center mt-10 mx-auto gap-4">
          <label
            htmlFor="fileInput"
            className="max-w-56 border border-green-500 h-80 flex items-center justify-center gap-3 flex-col p-5 bg-green-100 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Upload className="text-green-400" size={30} />

            <p className="text-gray-400 text-center">
              <span className="text-indigo-500 text-center underline">
                click
              </span>{" "}
              to upload your AI assistant image
            </p>
            <input
              onChange={handleImageSubmit}
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>

          {img && selectedIamge && (
            <div className="relative">
              <img
                className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
                src={selectedIamge}
                alt="image"
              />
              {selectedIamge && (
                <Check
                  size={30}
                  className="absolute top-5 font-bold left-5 text-green-500"
                />
              )}
            </div>
          )}

          {images?.map((img, i) => (
            <div key={i} className="relative">
              <img
                onClick={() => {
                  setImg(null);
                  setSelectedImage(img);
                }}
                className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
                src={img}
                alt="image"
              />
              {selectedIamge === img && (
                <Check
                  size={30}
                  className="absolute top-5 font-bold left-5 text-green-500"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIImageGallery;
