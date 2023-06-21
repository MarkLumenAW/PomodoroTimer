import { Icon } from "@iconify/react";

export default function Footer(props) {
  return (
    <section className="flex flex-row mt-16 justify-between">
      <span className="text-xs tracking-tighter pl-4">Designed and Coded by Alex Wang</span>
      <div className="flex pr-4 gap-2">
        <a href="https://github.com/MarkLumenAW/FCC_Frontend_Project_5_PomodoroTimer" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" color="fff" width="1rem" />
        </a>
        <a href="https://www.linkedin.com/in/pengcheng-wang-0412b0151/" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" color="fff" width="1rem" />
        </a>
      </div>
    </section>
  );
};
