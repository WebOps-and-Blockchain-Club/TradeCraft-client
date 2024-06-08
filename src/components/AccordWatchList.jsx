/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./style.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const faqs = [
  {
    id: 1,
    header: "WatchList 1",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 2,
    header: "WatchList 2",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
];

const AccordionItem = (props) => {
  const contentEl = useRef(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card ">
      <header
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <span className="material-symbols-outlined">
          <KeyboardArrowDownIcon />
        </span>
      </header>
      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <article>
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        );
      })}
      {/* <div className="bg-[#1F2937] flex justify-center items-center rounded-lg p-3 text-white"> */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="bg-[#1F2937] flex justify-start items-center rounded-lg p-3 text-white hover:cursor-pointer">
                <div className="mr-3">
                  <AddCircleOutlineIcon />
                </div>
                <div>Create New Watchlist</div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] text-white bg-slate-950">
              <DialogHeader>
                <DialogTitle>Create new WatchList</DialogTitle>
              </DialogHeader>
              <div className="grid  py-4">
                <div className="grid grid-cols-4 items-center ">
                  <Input
                    id="name"
                    className="col-span-5 text-black "
                    width="full"
                  />
                </div>
              </div>
              <DialogFooter >
                <Button className="bg-blue-500 hover:bg-blue-900" type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        {/* </div> */}
    </article>
  );
};

export default Accordion;
