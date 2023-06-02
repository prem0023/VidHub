import { Link } from "react-router-dom";

const Video = ({ videData }) => {
  const { snippet, statistics } = videData;

  return (
    <div className="flex flex-col w-[450px] hover:shadow-lg hover:bg-gray-200 p-3 m-2">
      <Link to={"/watch?v=" + videData.id}>
        <img
          className="rounded-xl mb-7 w-full"
          alt=""
          src={snippet.thumbnails.medium.url}
        />
      </Link>
      <h2 className="font-bold text-xl mb-3">{snippet.title}</h2>
      <div className="text-lg">{snippet.channelTitle}</div>
      <div className="text-lg">{statistics.viewCount} views</div>
    </div>
  );
};

export default Video;
