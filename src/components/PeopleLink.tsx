import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Person } from '../types';

type Props = {
  person: Person;
};

export const PeopleLink: React.FC<Props> = ({ person }) => {
  const { urlSlug } = useParams();

  return (
    <tr
      data-cy="person"
      className={classNames({
        'has-background-warning': urlSlug === person.slug,
      })}
    >
      <td>
        <Link
          to={`../${person.slug}`}
          className={classNames({
            'has-text-danger': person.sex === 'f',
          })}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      {!!person.mother ? (
        <td>
          <Link to={`../${person.mother.slug}`} className="has-text-danger">
            {person.mother.name}
          </Link>
        </td>
      ) : (
        <td>{person.motherName ? person.motherName : '-'}</td>
      )}

      {!!person.father ? (
        <td>
          <Link to={`../${person.father.slug}`}>{person.father.name}</Link>
        </td>
      ) : (
        <td>{person.fatherName ? person.fatherName : '-'}</td>
      )}
    </tr>
  );
};