import ChatLayout from "../components/homePage/ChatLayout";

const HomePage = () => {
  return (
    <>
      <section className="min-h-screen bg-linear-to-br from-blue-200 via-sky-300 to-blue-200 backdrop-blur-lg">
        <div className="container mx-auto p-10">
          <ChatLayout />
        </div>
      </section>
    </>
  );
};

export default HomePage;
