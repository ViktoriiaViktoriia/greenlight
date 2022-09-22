import React from 'react';
import Button from 'react-bootstrap/Button';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { ArrowRightIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function PaginationButton({ direction }) {
  const { t } = useTranslation();

  if (direction === 'Previous') {
    return (
      <Button variant="brand-backward">
        <ArrowLeftIcon className="me-3 hi-s text-brand" />
        { t('previous') }
      </Button>
    );
  }

  if (direction === 'Next') {
    return (
      <Button variant="brand-backward">
        { t('next') }
        <ArrowRightIcon className="ms-3 hi-s text-brand" />
      </Button>
    );
  }
}

PaginationButton.propTypes = {
  direction: PropTypes.string.isRequired,
};