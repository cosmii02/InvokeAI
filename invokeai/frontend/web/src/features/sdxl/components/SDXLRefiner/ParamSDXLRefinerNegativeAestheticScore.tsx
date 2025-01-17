import {
  CompositeNumberInput,
  CompositeSlider,
  FormControl,
  FormLabel,
} from '@invoke-ai/ui';
import { useAppDispatch, useAppSelector } from 'app/store/storeHooks';
import { setRefinerNegativeAestheticScore } from 'features/sdxl/store/sdxlSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const ParamSDXLRefinerNegativeAestheticScore = () => {
  const refinerNegativeAestheticScore = useAppSelector(
    (s) => s.sdxl.refinerNegativeAestheticScore
  );

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleChange = useCallback(
    (v: number) => dispatch(setRefinerNegativeAestheticScore(v)),
    [dispatch]
  );

  return (
    <FormControl>
      <FormLabel>{t('sdxl.negAestheticScore')}</FormLabel>
      <CompositeSlider
        min={1}
        max={10}
        step={0.5}
        fineStep={0.1}
        onChange={handleChange}
        value={refinerNegativeAestheticScore}
        defaultValue={2.5}
        marks
      />
      <CompositeNumberInput
        min={1}
        max={10}
        step={0.5}
        fineStep={0.1}
        onChange={handleChange}
        value={refinerNegativeAestheticScore}
        defaultValue={2.5}
      />
    </FormControl>
  );
};

export default memo(ParamSDXLRefinerNegativeAestheticScore);
