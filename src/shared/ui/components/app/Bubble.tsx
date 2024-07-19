import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { formatTime } from 'src/shared/lib/utils/timeUtils';
import tw from 'tailwind-styled-components';
import DoubleCheckIcon from '../../icons/DoubleCheckIcon';

type Props = {
  children: React.ReactNode;
  date?: Date;
  showCheck?: boolean;
  AvatarComponent?: React.ReactNode;
  isRight?: boolean;
  MessageActions?: React.ReactNode;
  showMessageActions?: boolean;
  className?: string;
  bubbleClassName?: string;
};

export default function Bubble({
  className,
  bubbleClassName,
  children,
  date,
  showCheck,
  AvatarComponent,
  showMessageActions = true,
  isRight,
  MessageActions,
}: Props) {
  const { current: formattedTime } = useRef<string | null>(date ? formatTime(date) : null);
  return (
    <div className={`px-4 ${isRight ? 'self-end' : ''} ${className} `}>
      <motion.div
        initial={{ opacity: 0.5, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <InnerContainerSc>
          {AvatarComponent && AvatarComponent}
          <BubbleDateContainerSc>
            <BubbleSc className={bubbleClassName} $isRight={isRight}>
              {children}
            </BubbleSc>
            {date && (
              <DateWrapperSc className="flex">
                <DateSc>{formattedTime}</DateSc>
                {showCheck && <DoubleCheckIcon className="w-4 h-4 ml-1 bg-primary-500" />}
              </DateWrapperSc>
            )}
            <FotterWraperSc>
              {MessageActions && showMessageActions ? MessageActions : null}
            </FotterWraperSc>
          </BubbleDateContainerSc>
        </InnerContainerSc>
      </motion.div>
    </div>
  );
}
const BubbleDateContainerSc = tw.div`
  flex
  w-fit
  max-w-full
  flex-1
  flex-col
`;

const FotterWraperSc = tw.div`
  mt-2
  flex
  w-full
  flex-col
`;
const InnerContainerSc = tw.div`
  bg
  mb-4
  flex
  flex-1
  flex-row
  gap-2
`;

interface BubbleScProps {
  $isRight?: boolean;
}
const BubbleSc = tw.div<BubbleScProps>`
  mb-auto
  flex
  w-fit
  flex-col
  break-words
  rounded-md
  p-4
  text-sm
  ${(props) =>
    props.$isRight
      ? 'rounded-tr-none ml-4 bg-primary-500 text-gray-100'
      : 'rounded-tl-none bg-white dark:bg-slate-950/70 text-gray-900 font-light text-gray-900 dark:text-white shadow-sm '}

`;

const DateWrapperSc = tw.div`
  ml-auto
  mt-1
  flex
`;
const DateSc = tw.div`
  text-xs
  text-gray-400
  dark:text-gray-100/90
`;
