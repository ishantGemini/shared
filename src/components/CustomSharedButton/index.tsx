import "tailwindcss/tailwind.css";
import cns from "classnames";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  ButtonIcon?: IconType;
  isLoading?: boolean;
  classToOverride?: string;
}
interface PropsIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  ButtonIcon: IconType;
  isLoading?: boolean;
  classToOverride?: string;
}

function CustomSharedButton({
  text,
  className,
  ButtonIcon = undefined,
  isLoading = false,
  ...props
}: Props | PropsIconButton) {
  return (
    <button
      disabled={isLoading}
      type="button"
      className={cns(
        className,
        !text ? "p-1 " : "px-5 py-2.5",
        "flex hover:shadow-md flex-center gap-2 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm text-center"
      )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {/* if Icon Button then hide icon in loading state */}
      {(text || (!isLoading && true)) && ButtonIcon && (
        <ButtonIcon
          className={cns(
            !text ? "w-5 h-5" : "w-6 h-6",
            "flex-shrink-0 transition duration-75 MenuIcon"
          )}
        />
      )}
      {text}
      {isLoading && (
        <div
          className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />
      )}
    </button>
  );
}

export default CustomSharedButton;
