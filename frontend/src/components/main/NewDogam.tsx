import { Link } from "react-router-dom";
import { Mobile, PC } from "../MediaQuery";
import NewDogamAlias from "./NewDogamAlias";
import ThumbsDown from "../profile/ThumbsDown";
import CommentModal from "../profile/CommentModal";
import { NewDogamType } from "@/types/dogamTypes";

export default function NewDogam({ data }: { data: NewDogamType }) {
  return (
    <>
      <PC>
        {/* 전체 */}
        <div className="w-[500px] flex">
          {/* 왼쪽 구역 */}
          <Link
            to={`/main/profile/${data.dogamId}`}
            className="w-[200px] border-4 rounded-3xl rounded-r-none border-r-0 flex flex-col justify-center items-center bg-slate-100"
          >
            {/* 프사 */}
            <img
              src={data.dogamImgUrl}
              className="w-[130px] h-[130px] mb-5 rounded-full"
            />
            {/* 이름 */}
            <p className="font-bold text-2xl mb-5">{data.friendName}</p>
            {/* 칭호 */}
            <NewDogamAlias alias={data.friendAlias} />
          </Link>

          {/* 오른쪽 구역 */}
          <div>
            {/* 이미지  */}
            <div
              className={`h-[200px] w-[320px] border-4 border-inherit rounded-3xl rounded-l-none border-l-0 bg-[url('${data.dogamImgUrl}')] bg-cover rounded-b-none border-b-0`}
            />
            <div className="w-[320px] border-4 border-inherit rounded-3xl bg-cover rounded-l-none rounded-t-none border-l-0 border-t-0 mt-0">
              {/* 제목 */}
              <div className="w-full font-bold text-2xl px-2 py-3">
                {data.dogamTitle}
              </div>
              <div className="flex gap-3 pb-3 font-bold items-center">
                {/* 싫어요 */}
                <div className="lg:hover:scale-110 transition-transform ease-in-out duration-500">
                  <ThumbsDown tD={data.hated} />
                </div>
                <div className=" flex self-center mr-4 text-xl text-blue-600">
                  {data.dogamDislikeNum}
                </div>
                {/* 댓글 */}
                <div className="lg:hover:scale-110 transition-transform ease-in-out duration-500">
                  <CommentModal />
                </div>
                {/* 등록일 */}
                <div className="grid grid-col place-items-center font-bold">
                  <div className="text-center">{data.createdAt}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PC>

      {/* ------------------------------------------------------------------- */}

      <Mobile>
        {/* 전체 */}
        <div className="w-[450px] flex">
          {/* 왼쪽 구역 */}
          <Link
            to={`/main/profile/${data.dogamId}`}
            className="w-[200px] border-4 rounded-3xl rounded-r-none border-r-0 flex flex-col justify-center items-center bg-slate-100"
          >
            {/* 프사 */}
            <img
              src={data.friendImgUrl}
              className="w-[130px] h-[130px] mb-5 rounded-full"
            />
            {/* 이름 */}
            <p className="font-bold text-2xl mb-5">{data.friendName}</p>
            {/* 칭호 */}
            <NewDogamAlias alias={data.friendAlias} />
          </Link>

          {/* 오른쪽 구역 */}
          <div>
            {/* 이미지 */}
            <div
              className={`h-[200px] w-[270px] border-4 border-inherit rounded-3xl rounded-l-none border-l-0 bg-[url('${data.dogamImgUrl}')] bg-cover rounded-b-none border-b-0`}
            />
            <div className="w-[270px] border-4 border-inherit rounded-3xl bg-cover rounded-l-none rounded-t-none border-l-0 border-t-0 mt-0">
              {/* 제목 */}
              <div className="w-full font-bold text-2xl px-2 py-3">
                {data.dogamTitle}
              </div>
              <div className="flex gap-3 pb-3 font-bold items-center">
                {/* 싫어요 */}
                <div className="lg:hover:scale-110 transition-transform ease-in-out duration-500">
                  <ThumbsDown tD={data.hated} />
                </div>
                <div className=" flex self-center mr-4 text-xl text-blue-600">
                  {data.dogamDislikeNum}
                </div>
                {/* 댓글 */}
                <div className="lg:hover:scale-110 transition-transform ease-in-out duration-500">
                  <CommentModal />
                </div>
                {/* 등록일 */}
                <div className="grid grid-col place-items-center font-bold text-[12px]">
                  <div className="text-center">{data.createdAt}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
}
