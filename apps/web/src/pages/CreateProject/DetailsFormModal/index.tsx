import React from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Button, FormInput, FormSelect, Modal } from 'ui';
import { FormTypes } from '../CreateProject';

import {
  ButtonsContainer,
  InputsContainer,
  modalStyles,
  PublishButton,
  Title,
} from './styles';

const PLACEHOLDER_OPTIONS = [
  { value: 'React', label: 'React' },
  { value: 'Vue', label: 'Vue' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'Next.js', label: 'Next.js' },
  { value: 'Svelte', label: 'Svelte' },
  { value: 'Prisma', label: 'Prisma' },
  { value: 'GraphQL', label: 'GraphQL' },
  { value: 'Golang', label: 'Golang' },
  { value: 'Java', label: 'Java' },
  { value: 'Python', label: 'Python' },
  { value: 'ExpressJS', label: 'ExpressJS' },
  { value: 'SQL', label: 'SQL' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Ruby on Rails', label: 'Ruby on Rails' },
  { value: 'Django', label: 'Django' },
  { value: 'Backbone', label: 'Backbone' },
];

interface DetailsFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<FormTypes>;
  isLoading: boolean;
}

const DetailsFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
}: DetailsFormModalProps) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={modalStyles}>
      <Title>Final details</Title>
      <InputsContainer>
        <FormInput
          label='Repository Link'
          register={register('repoLink')}
          error={errors.repoLink}
        />
        <FormInput
          label='Live Site Link'
          register={register('siteLink')}
          error={errors.siteLink}
        />
        <FormSelect
          isMulti
          control={control}
          name='tags'
          label='Tags'
          options={PLACEHOLDER_OPTIONS}
          error={errors.tags}
          register={register('tags')}
        />
      </InputsContainer>
      <ButtonsContainer>
        <Button variant='secondary' onClick={onClose} type='button'>
          Close
        </Button>
        <PublishButton
          type='submit'
          isLoading={isLoading}
          disabled={isLoading}
          onClick={handleSubmit(onSubmit)}
        >
          Publish
        </PublishButton>
      </ButtonsContainer>
    </Modal>
  );
};

export default DetailsFormModal;
