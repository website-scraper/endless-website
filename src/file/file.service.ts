import { Injectable } from '@nestjs/common';
import { createCanvas, PNGStream } from 'canvas';
import { ReadableStream } from 'node:stream/web';

@Injectable()
export class FileService {
  createImageStream({
    text='test image', 
    width = 1200, 
    height = 600
  }: {
    text?: string,
    width?: number,
    height?: number 
  }): PNGStream {

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    context.fillStyle = '#0b0118';
    context.fillRect(0, 0, width, height);

    context.font = 'bold 75pt Menlo';
    context.textBaseline = 'top';
    context.textAlign = 'center';
    context.fillStyle = '#b98001';

    const textWidth = context.measureText(text).width;
    context.fillRect(590 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
    context.fillStyle = '#fff';
    context.fillText(text, 600, 180);

    return canvas.createPNGStream();
  }
}