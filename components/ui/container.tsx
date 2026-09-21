import { cn } from '@/lib/cn'

export function Container({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full max-w-[1180px] px-6 md:px-10', className)} {...props}>
      {children}
    </div>
  )
}
