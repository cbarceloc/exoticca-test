import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import z from 'zod';

import { Trip, tripSchema } from 'src/modules/trips/domain/Trip.Entity';
import Button from 'src/shared/ui/components/elements/Button';
import IconButton from 'src/shared/ui/components/elements/IconButton';
import FormInput from 'src/shared/ui/components/form/FormInput';
import { FormLabel } from 'src/shared/ui/components/form/FormLabel';
import FormProvider from 'src/shared/ui/components/form/FormProvider';
import FormSelect from 'src/shared/ui/components/form/FormSelect';
import FormTextArea from 'src/shared/ui/components/form/FormTextArea';
import AddIcon from 'src/shared/ui/icons/AddIcon';
import DeleteIcon from 'src/shared/ui/icons/DeleteIcon';

type FormValues = z.infer<typeof tripFormSchema>;

type Props = {
  trip?: Trip;
  onSave: (trip: Omit<Trip, 'id' | 'isCompleted'>) => void;
};
const tripFormSchema = tripSchema.pick({
  title: true,
  description: true,
  introduction: true,
  photoUrl: true,
  itinerary: true,
});

export default function TripForm({ trip, onSave }: Props) {
  const methods = useForm<FormValues>({
    resolver: zodResolver(tripFormSchema),
    mode: 'onChange',
    defaultValues: {
      title: trip?.title || '',
      introduction: trip?.introduction || '',
      description: trip?.description || '',
      photoUrl: trip?.photoUrl || '',
      itinerary: trip?.itinerary || [{ location: '', description: '', day: 0 }],
    },
  });
  const onSubmit = async (data: FormValues) => {
    onSave({
      title: data.title,
      introduction: data.introduction,
      description: data.description,
      photoUrl: data.photoUrl,
      itinerary: data.itinerary,
    });
  };

  const { handleSubmit, control } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'itinerary',
  });

  const handleAddStop = () => {
    append({ location: '', description: '', day: 0 });
  };
  return (
    <>
      <FormProvider<FormValues> methods={methods}>
        <div className="space-y-5 mt-6 ">
          <FormInput label="Name" name={'title'} placeholder={'Italy'} />
          <FormTextArea
            className="h-24"
            label="Introduction (max. 240 characters)"
            name={'introduction'}
            placeholder={'From Rome to Venice...'}
          />
          <FormTextArea
            label="Description"
            name={'description'}
            placeholder={'A trip to Italy...'}
          />
          <FormInput label="Image" placeholder="Image URL" name={'photoUrl'} />
          <div className="flex flex-row justify-between items-center">
            <FormLabel label="Day by day itinerary" />
            <IconButton
              Icon={<AddIcon className="h-3 w-3 text-black" />}
              onClick={handleAddStop}
              ariaLabel={'add stop'}
              className="border border-black p-0 "
            />
          </div>
          <div className="space-y-4 ">
            {fields.map((field, index) => (
              <div key={field.id} className=" flex space-x-2 bg-gray-100 rounded-md p-4">
                <FormSelect
                  className="w-full"
                  name={`itinerary.${index}.day`}
                  options={Array.from({ length: 30 }, (_, i) => i + 1).map((day) => ({
                    value: day.toString(),
                    label: day.toString(),
                  }))}
                />

                <div className=" flex-1 space-y-2 ">
                  <FormInput name={`itinerary.${index}.location`} placeholder={'Location'} />
                  <FormInput name={`itinerary.${index}.description`} placeholder={'Description'} />
                </div>

                <IconButton
                  ariaLabel="delete"
                  Icon={<DeleteIcon className="h-4 w-4" />}
                  className="bg-transparent mb-1"
                  onClick={() => remove(index)}
                />
              </div>
            ))}
          </div>
          <Button
            className="min-w-32 bg-black hover:bg-slate-700"
            label={'save'}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </FormProvider>
    </>
  );
}
