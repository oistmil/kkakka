import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import Comment from "./Comment";
import { useState } from "react";

const FormSchema = z.object({
  content: z.string().min(2, {
    message: "두글자 이상 입력해주세요!",
  }),
});

export default function CommentModal() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  //----------------------------------------- 임시 데이터

  // 사용자 이름
  const userName = "전수민";
  const userUpdate = "2024.01.26 오후 3:50";
  const userAlias = "10년째 실버";

  // 임시 댓글 리스트
  const commentData = [
    {
      name: "이해건",
      text: "개못하네",
      update: "2024.01.26 오후 2:06",
      alias: "인의동손잭스",
    },
  ];

  //-----------------------------------------

  const [commentList, SetCommentList] = useState(commentData);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="bg-[url('/image/comment.png')] h-10 w-10 bg-cover" />
      </PopoverTrigger>
      <PopoverContent className="w-[700px]">
        <div className="grid gap-4 w-full">
          {/* 헤더 */}
          <div className="space-y-2">
            <h4 className="font-bold leading-none text-xl">댓글 목록</h4>
          </div>
          <div className="grid gap-2">
            <div className="border-2 border-black w-full" />
            {commentList.map((com, idx) => {
              return <Comment key={idx} data={com} />;
            })}

            {/* 댓글 입력 부분 */}
            <div className="">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex items-center"
                >
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex gap-3">
                          <FormControl>
                            <Input
                              placeholder="댓글 입력"
                              {...field}
                              className="w-[590px]"
                              // value={field.value || inputText}
                              // onChange={(e) => {
                              //   setInputText(e.target.value);
                              // }}
                            />
                          </FormControl>
                          <Button
                            type="submit"
                            variant="secondary"
                            className="border-solid border-2 border-inherit bg-white font-bold h-[42px] text-lg"
                            onClick={(_) => {
                              // 2글자 이상만 작성 가능하게
                              if (
                                form.getValues().content != undefined &&
                                form.getValues().content.length > 1
                              ) {
                                // 입력값 받고
                                const t = form.getValues().content;
                                // 댓글 객체 만들기
                                const data = {
                                  name: userName,
                                  text: t,
                                  update: userUpdate,
                                  alias: userAlias,
                                };
                                // 댓글 리스트에 추가
                                SetCommentList((pre) => [...pre, data]);
                                // 댓글 입력창 초기화
                                form.setValue("content", "");
                              }
                            }}
                          >
                            등록
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
