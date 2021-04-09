import { Cross } from '@components/icons'
import FocusTrap from '@lib/focus-trap'
import Portal from '@reach/portal'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import classNames from 'classnames'
import { FC, useCallback, useEffect, useRef } from 'react'
import { Container } from '..'
import s from './Modal.module.css'
interface Props {
  className?: string
  children?: any
  open?: boolean
  noBackgroud?: boolean
  closable?: boolean
  onClose: () => void
  onEnter?: () => void | null
}

const Modal: FC<Props> = ({
  children,
  open,
  onClose,
  noBackgroud,
  closable = true,
  onEnter = null,
}) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose()
      }
    },
    [onClose]
  )
  useEffect(() => {
    if (open && ref.current) {
      disableBodyScroll(ref.current)
    }
    return () => {
      ref.current && enableBodyScroll(ref.current)
    }
  }, [open])
  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, handleKey])
  return (
    <Portal>
      {open ? (
        <Container
          fluid
          className={classNames(s.root, noBackgroud && s.noBackgroud)}
        >
          <div className={s.modal} role="dialog" ref={ref}>
            <FocusTrap focusFirst>{children}</FocusTrap>
            {closable && (
              <button
                onClick={() => onClose()}
                aria-label="Close panel"
                className="hover:text-gray-500 transition ease-in-out duration-150 focus:outline-none absolute right-0 top-0 m-6"
              >
                <Cross className="h-6 w-6" />
              </button>
            )}
          </div>
        </Container>
      ) : null}
    </Portal>
  )
}

export default Modal
