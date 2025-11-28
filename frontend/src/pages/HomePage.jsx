import ChatSkeleton from "../components/ChatSkeleton";
import ChatLayout from "../components/homePage/ChatLayout";
import Loading from "../components/Loading";

const HomePage = () => {
  return (
    <>
      <section className="min-h-screen bg-linear-to-br from-blue-200 via-sky-300 to-blue-200 backdrop-blur-lg">
        <div className="lg:p-10">
          <ChatLayout />
        </div>
      </section>
    </>
  );
};

export default HomePage;
