
import { NextResponse } from 'next/server';
import { createOrUpdateBorrowData } from '../(db)/borrow/page';


export async function GET(req, res) {
    // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    // const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;
    // const apiKey = process.env.API_KEY;
    // const apiSecret = process.env.API_SECRET;


    try {
        // const borrowResponse = await fetch('https://bybit-premiums-api.onrender.com/borrow-rate', {
        //     headers: { 'apikey': apiKey, 'secret': apiSecret }
        // });

        // if (!borrowResponse.ok) {
        //     console.error('Error fetching data:', borrowResponse.statusText);
        //     return NextResponse.error(new Error('Borrow response failed'));
        // }

        const testData =
            [{
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            },
            {
                month: 0.35743795,
                'one day': 0.4703143,
                coin: 'EQOUSDTGGGGTWAS',
                'coin id': 18723,
                'three days': 0.805499838,
                'three months': 9,
                week: 0.6697941
            },
            {
                month: 0.21500107,
                'one day': 0.672144,
                coin: 'CFKUSDTGGGGTWAS',
                'coin id': 11623,
                'three days': 0.591818977,
                'three months': 9,
                week: null
            },
            {
                month: 0.78573547,
                'one day': 0.4307549,
                coin: 'NWSUSDTGGGGTWAS',
                'coin id': 19823,
                'three days': 0.491935873,
                'three months': 9,
                week: 0.29510518
            },
            {
                month: 0.16631783,
                'one day': 0.7703422,
                coin: 'VSIUSDTGGGGTWAS',
                'coin id': 16423,
                'three days': 0.140050335,
                'three months': 9,
                week: 0.12202607
            },
            {
                month: 0.36509659,
                'one day': 0.7001823,
                coin: 'PAGUSDTGGGGTWAS',
                'coin id': 15323,
                'three days': 0.731306104,
                'three months': 9,
                week: null
            }]
        // const borrowData = await borrowResponse.json();
        // await createOrUpdateBorrowData(testData);
        // return NextResponse.json(testData);
        await createOrUpdateBorrowData(testData)
        return NextResponse.json("running");

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.error(new Error('An error occurred'));
    }
}