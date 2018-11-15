import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
export const loadSvgResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/images';
    const slideBarDir = `${imgDir}/slidebar`;
    const dayDir = `${slideBarDir}/day`;
    const avatarDir = `${imgDir}/avatar`;
    const iconDir = `${imgDir}/icons`;
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.addSvgIcon('icon_loading', ds.bypassSecurityTrustResourceUrl(`${imgDir}/icon_loading.svg`));
    ir.addSvgIcon('edit', ds.bypassSecurityTrustResourceUrl(`${imgDir}/edit.svg`));
    ir.addSvgIcon('fc', ds.bypassSecurityTrustResourceUrl(`${imgDir}/fc.svg`));
    ir.addSvgIcon('get', ds.bypassSecurityTrustResourceUrl(`${imgDir}/get.svg`));
    ir.addSvgIcon('zxt', ds.bypassSecurityTrustResourceUrl(`${imgDir}/zxt.svg`));
    ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${iconDir}/1.svg`));
    
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    days.forEach(d => {
        ir.addSvgIcon(`day${d}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/fc.svg`));
    })
}