import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function baseInfo() {
  info({
    title: 'Too many matches found.',
    text: 'Please enter a more specific query!',
  });
}
export function baseAlert() {
  alert({
    title: 'Not found',
    text: 'There is no such country',
  });
}
