import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LeftIcon from '../../../assets/icons/left.svg';
import RightIcon from '../../../assets/icons/right.svg';
import './SuperPaginator.scss';
import { useState } from 'react';
export const SuperPaginator = ({ currentPage, totalPages, onPageChange, }) => {
    const maxPages = 5;
    const [selectedPage, setSelectedPage] = useState(currentPage);
    const [startPage, setStartPage] = useState(0);
    const [endPage, setEndPage] = useState(maxPages);
    const handlePagePrev = () => {
        if (selectedPage > 1) {
            setSelectedPage(selectedPage - 1);
            onPageChange(selectedPage - 1);
            if (selectedPage - 1 === startPage) {
                setStartPage(startPage - 1);
                setEndPage(endPage - 1);
            }
        }
    };
    const handlePageNext = () => {
        if (selectedPage < totalPages) {
            setSelectedPage(selectedPage + 1);
            onPageChange(selectedPage + 1);
            if (selectedPage === endPage) {
                setStartPage(startPage + 1);
                setEndPage(endPage + 1);
            }
        }
    };
    return (_jsx("div", { className: 'paginator', children: _jsxs("div", { className: 'paginator__order', children: [_jsx("img", { onClick: handlePagePrev, className: 'paginator__icon', src: LeftIcon, alt: 'left' }), _jsx("div", { className: 'paginator__list', children: Array.from({ length: totalPages }, (_, index) => {
                        if (index < endPage && index >= startPage) {
                            return (_jsx("div", { className: `paginator__list--number ${index + 1 === selectedPage && 'paginator__selected'}`, children: index + 1 }, `page-${index}`));
                        }
                        else if (index === endPage) {
                            return (_jsx("div", { className: 'paginator__list--number', children: "..." }, `page-${index}`));
                        }
                    }) }), _jsx("img", { onClick: handlePageNext, className: 'paginator__icon', src: RightIcon, alt: 'right' })] }) }));
};
