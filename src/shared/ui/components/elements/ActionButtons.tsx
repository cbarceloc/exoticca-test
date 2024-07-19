import { useTranslation } from 'react-i18next';
import Button from './Button';

type ActionsButtonsProps = {
  applyLabel?: string;
  cancelLabel?: string;
  onApply: () => void;
  onCancel?: () => void;
  isApplyEnabled?: boolean;
};
export function ActionButtons({
  applyLabel,
  cancelLabel,
  onApply,
  onCancel,
  isApplyEnabled,
}: ActionsButtonsProps) {
  const { t } = useTranslation('common');
  return (
    <div className={'mt-12 flex justify-end space-x-2'}>
      {onCancel && (
        <Button
          variant={'outlined'}
          className={'w-32'}
          label={cancelLabel || t('actions.cancel')}
          onClick={onCancel}
        />
      )}

      <Button
        className={`${onCancel ? 'w-32' : 'w-full'}`}
        label={applyLabel || t('actions.apply')}
        onClick={onApply}
        isEnabled={isApplyEnabled}
      />
    </div>
  );
}
