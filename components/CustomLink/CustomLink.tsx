import React from 'react';
import Link from 'next/link';
import styles from './CustomLink.module.scss';

interface Props {
	label: string;
	href: string;
}

const CustomLink = ({ label, href }: Props) => {
	return (
		<Link className={styles.link} href={href}>
			{label}{' '}
		</Link>
	);
};

export default CustomLink;
