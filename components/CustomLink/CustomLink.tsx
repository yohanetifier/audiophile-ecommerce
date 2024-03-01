import React from 'react';
import Link from 'next/link';

interface Props {
	label: string;
	href: string;
}

const CustomLink = ({ label, href }: Props) => {
	return <Link href={href}>{label} </Link>;
};

export default CustomLink;
