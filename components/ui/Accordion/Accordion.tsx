import { Down } from '@components/icons'
import React, { forwardRef, HTMLAttributes } from 'react'

export interface AccordionProps extends HTMLAttributes<HTMLElement> {}

const Accordion: React.FC<AccordionProps> = forwardRef(() => {
  return (
    <div className="space-y-md  mt-responsive-lg lg:mt-2xl">
      {[`Details`, `Size & Fit`, `Fabric`, `Shipping & Returns`].map((str) => (
        <div tabIndex={0} className="w-full group">
          <div className="font-bold border-b border-black w-full space-x-3 flex items-center">
            <div className="py-1 text-h5 capitalize flex-1 text-left">
              {str}
            </div>
            <div
              className={
                'transform transition-transform rotate-0 group-focus:-rotate-180 duration-300 ease-in-out text-[24px]'
              }
            >
              <Down />
            </div>
          </div>
          <div className="h-0 group-focus:h-auto group-focus:block whitespace-pre-line overflow-hidden transition-all -mt-4 group-focus:mt-0">
            {`
            • Tiered midi dress
            • Buttercup yellow hue
            • Cotton bodice with added stretch
            • Cotton batiste skirt and sleeves
            • Shirred details
            • Scoop neckline
            • This style is lined
            `}
          </div>
        </div>
      ))}
    </div>
  )
})

export default Accordion
