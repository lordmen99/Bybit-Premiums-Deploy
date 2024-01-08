"use client"
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import styles from './coinfundingrates.module.css'
import * as ScrollArea from '@radix-ui/react-scroll-area';
import "../(reusable)/radixscroll.css";
import Image from 'next/image'



const CoinFundingRates = ({ coinFundingRates }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'none' });


    const getSortIndicator = (columnName) => {
        if (sortConfig.key === columnName) {
            return sortConfig.direction === 'ascending' ? '▲' : '▼';
        }
        return '';
    };


    const requestSort = (key) => {
        let direction = 'descending';
        if (sortConfig.key === key && sortConfig.direction === 'descending') {
            direction = 'ascending';
        }
        setSortConfig({ key, direction });
    }


    const sortedItems = React.useMemo(() => {
        let sortableItems = [...coinFundingRates];
        if (sortConfig.key !== null && sortConfig.direction !== 'none') {
            sortableItems.sort((a, b) => {
                if (sortConfig.key === 'name') {
                    if (sortConfig.direction === 'descending') {
                        return a[sortConfig.key].localeCompare(b[sortConfig.key]);
                    } else {
                        return b[sortConfig.key].localeCompare(a[sortConfig.key]);
                    }
                } else {
                    const valueA = parseFloat(a[sortConfig.key]) || 0;
                    const valueB = parseFloat(b[sortConfig.key]) || 0;
                    if (sortConfig.direction === 'descending') {
                        return valueA - valueB;
                    } else {
                        return valueB - valueA;
                    }
                }
            });
        }
        return sortableItems;
    }, [coinFundingRates, sortConfig]);

    return (
        <div className={styles.fundingMainDiv}>
            <h1 className={styles.fundingMainHeader}>
                BYBIT Funding Rates
            </h1>
            <div className={styles.scrollDiv}>
            <ScrollArea.Root className="ScrollAreaRoot">
                <ScrollArea.Viewport className="ScrollAreaViewport">
                        <table>
                            <colgroup>
                                <col style={{ width: "23%", minWidth: "150px" }} />
                                <col style={{ width: "12.8", minWidth: "fit-content" }} />
                                <col style={{ width: "12.8", minWidth: "fit-content" }} />
                                <col style={{ width: "12.8", minWidth: "fit-content" }} />
                                <col style={{ width: "12.8", minWidth: "fit-content" }} />
                                <col style={{ width: "12.8", minWidth: "fit-content" }} />
                                <col style={{ width: "12.8", minWidth: "fit-content" }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => requestSort('name')}>Name <strong className={styles.arrows}>{getSortIndicator('name')}</strong></th>
                                    <th onClick={() => requestSort('twentyFourHourVolume')}>24h Volume <strong className={styles.arrows}>{getSortIndicator('twentyFourHourVolume')}</strong></th>
                                    <th onClick={() => requestSort('oneDayAverage')}>1d <strong className={styles.arrows}>{getSortIndicator('oneDayAverage')}</strong></th>
                                    <th onClick={() => requestSort('threeDayAverage')}>3d <strong className={styles.arrows}>{getSortIndicator('threeDayAverage')}</strong></th>
                                    <th onClick={() => requestSort('sevenDayAverage')}>7d <strong className={styles.arrows}>{getSortIndicator('sevenDayAverage')}</strong></th>
                                    <th onClick={() => requestSort('thirtyDayAverage')}>1m <strong className={styles.arrows}>{getSortIndicator('thirtyDayAverage')}</strong></th>
                                    <th onClick={() => requestSort('ninetyDayAverage')}>3m <strong className={styles.arrows}>{getSortIndicator('ninetyDayAverage')}</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                <AnimatePresence>
                                {sortedItems.map((coinFundingRate) => {
                                    const volume = coinFundingRate.twentyFourHourVolume;
                                    const formattedVolume = volume >= 1000 ? Math.floor(volume)?.toLocaleString() : volume?.toString();
                                    return (
                                        <motion.tr
                                            key={coinFundingRate.id}
                                            layout
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeInOut",
                                                delay: 0.1
                                            }}
                                        >
                                            <td className={styles.tdSymbolAndName}>
                                                <Image width={20} height={20} src="https://cdn-icons-png.flaticon.com/512/4440/4440487.png" alt='coin symbol' />
                                                <span>{coinFundingRate.name}</span>
                                            </td>
                                            <td>{formattedVolume ? `$${formattedVolume}` : ""}</td>
                                            <td>{coinFundingRate.oneDayAverage ? `${coinFundingRate.oneDayAverage}%` : ""}</td>
                                            <td>{coinFundingRate.threeDayAverage ? `${coinFundingRate.threeDayAverage}%` : ""}</td>
                                            <td>{coinFundingRate.sevenDayAverage ? `${coinFundingRate.sevenDayAverage}%` : ""}</td>
                                            <td>{coinFundingRate.thirtyDayAverage ? `${coinFundingRate.thirtyDayAverage}%` : ""}</td>
                                            <td>{coinFundingRate.ninetyDayAverage ? `${coinFundingRate.ninetyDayAverage}%` : ""}</td>
                                        </motion.tr>
                                    )
                                })}
                                </AnimatePresence>
                            </tbody>
                        </table>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
            </div>
        </div>
    );
}
export default CoinFundingRates;