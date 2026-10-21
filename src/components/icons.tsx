import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 3.5h3.2l1.6 4.2-2.1 1.3a11.5 11.5 0 0 0 7.3 7.3l1.3-2.1 4.2 1.6V19a1.8 1.8 0 0 1-1.9 1.8A16.6 16.6 0 0 1 3.2 5.4 1.8 1.8 0 0 1 5 3.5Z" />
  </Icon>
);

export const HomeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 11 12 4l8.5 7" />
    <path d="M5.5 9.5V20h13V9.5" />
    <path d="M10 20v-5.5h4V20" />
  </Icon>
);

export const ScreenIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="4.5" width="18" height="12" rx="1.8" />
    <path d="M8.5 20h7M12 16.5V20" />
  </Icon>
);

export const ApplianceIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="4.5" y="3" width="15" height="18" rx="2" />
    <path d="M4.5 7.5h15" />
    <circle cx="12" cy="14" r="3.6" />
    <path d="M7.5 5.2h.01M10 5.2h.01" />
  </Icon>
);

export const ShirtIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 3.5 4 6l1.6 4.2 2.4-.9V20.5h8V9.3l2.4.9L20 6l-5-2.5a3 3 0 0 1-6 0Z" />
  </Icon>
);

export const BottleIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M10 3h4v3h-4z" />
    <path d="M9.5 6h5l1.5 3v10.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 19.5V9Z" />
    <path d="M8 12.5h8" />
  </Icon>
);

export const BlocksIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="12.5" width="8" height="8" rx="1" />
    <rect x="12.5" y="12.5" width="8" height="8" rx="1" />
    <rect x="8" y="3.5" width="8" height="8" rx="1" />
  </Icon>
);

export const ToolIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3Z" />
    <path d="M14.5 6.5 17 4l3 3-2.5 2.5" />
    <path d="M4 20l3-3" />
  </Icon>
);

export const SearchIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m20 20-4.8-4.8" />
  </Icon>
);

export const CompareIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3.5v17M7 20.5h10" />
    <path d="M5 7.5h14" />
    <path d="m5 7.5-2.5 6a2.8 2.8 0 0 0 5 0Z" />
    <path d="m19 7.5-2.5 6a2.8 2.8 0 0 0 5 0Z" />
  </Icon>
);

export const ListIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 6.5h11M9 12h11M9 17.5h11" />
    <path d="m3.5 6.5 1 1 2-2M3.5 12l1 1 2-2M3.5 17.5l1 1 2-2" />
  </Icon>
);

export const ChatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 5.5h16v10.5H9.5L5 20v-4H4Z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </Icon>
);

export const UserIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4.5 12.5 4.5 4.5 10.5-10.5" />
  </Icon>
);

export const XIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 6.5h16M4 12h16M4 17.5h16" />
  </Icon>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Icon>
);

export const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </Icon>
);

export const TagIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3a1.5 1.5 0 0 1 0 2.1l-6.6 6.6a1.5 1.5 0 0 1-2.1 0Z" />
    <circle cx="8" cy="8" r="1.4" />
  </Icon>
);

export const HelpIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M9.6 9.4a2.5 2.5 0 0 1 4.8 1c0 1.6-2.4 2.2-2.4 3.6M12 17h.01" />
  </Icon>
);

export const BagIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 8h14l-1.1 11.2a1.5 1.5 0 0 1-1.5 1.3H7.6a1.5 1.5 0 0 1-1.5-1.3Z" />
    <path d="M9 10V7a3 3 0 0 1 6 0v3" />
  </Icon>
);

export const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Icon>
);

export const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </Icon>
);

export const LockIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="1.5" />
    <path d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3" />
  </Icon>
);
