import toast from "react-hot-toast";
import { FormEvent, useEffect, useRef, useState } from "react";
import EmojiPicker, {
  Theme,
  EmojiStyle,
  SuggestionMode,
} from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";

import { EmojiType, ErrRes } from "@/types";
import { useCommentVideoMutation } from "@/redux/api/VideoApi";
import { RootState, useAppSelector } from "@/redux/store";

const CommnetBar = () => {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const { selectedReel } = useAppSelector((state: RootState) => state.auth);

  const [createComment] = useCommentVideoMutation();

  const handleEmojiClick = (emoji: EmojiType) => {
    setMessage((prev) => prev + emoji.emoji);
  };

  const handleComment = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await createComment({
        buzz_id: selectedReel?._id,
        comment: message,
      }).unwrap();
      if (res.status === "success") {
        setMessage("");
      }
    } catch (err) {
      const errRes = err as ErrRes;
      toast.error(errRes.error || errRes.message || "Something went wrong");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setShowEmoji(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <ul className="h-[10vh] flex items-center md:gap-3 border-t border-gray-300">
        <li className="flex gap-6 z-[9999] bg-opacity-95 opacity-95"></li>
        <form className="w-full rounded-lg h-10 flex gap-6 items-center">
          <div className="relative w-full flex items-center">
            <input
              type="text"
              placeholder="Add comment"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-200 text-sm focus:outline-none text-gray-800 placeholder:text-gray-400 h-10 rounded px-5 py-4 w-full"
            />
            <BsEmojiSmile
              onClick={() => setShowEmoji(true)}
              title="Emoji"
              className="text-gray-500 cursor-pointer text-xl absolute right-3"
            />
          </div>

          <button
            type="submit"
            disabled={message.length === 0}
            onClick={handleComment}
            className={`text-sm ${
              message.length > 0 ? "text-primary-main" : "text-gray-300"
            }`}
          >
            Post
          </button>
        </form>
      </ul>
      <div className="absolute bottom-20 right-2" ref={emojiPickerRef}>
        {showEmoji && (
          <EmojiPicker
            theme={Theme.DARK}
            emojiStyle={EmojiStyle.FACEBOOK}
            suggestedEmojisMode={SuggestionMode.FREQUENT}
            onEmojiClick={handleEmojiClick}
          />
        )}
      </div>
    </>
  );
};

export default CommnetBar;
