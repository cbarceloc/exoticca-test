// form
import { FieldValues, FormProvider as Form, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------

type Props<TFieldValues extends FieldValues> = {
  children: React.ReactNode;
  methods: UseFormReturn<TFieldValues>;
  onSubmit?: VoidFunction;
  className?: string;
};

export default function FormProvider<TFieldValues extends FieldValues>({
  children,
  onSubmit,
  methods,
  className,
}: Props<TFieldValues>) {
  return (
    <Form {...methods}>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
}
