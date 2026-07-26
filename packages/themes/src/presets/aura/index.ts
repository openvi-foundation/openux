import type { Preset } from '@openuxkit/themes/types';
import type { AuraBaseDesignTokens } from './base/index.d';

import accordion from '@openuxkit/themes/aura/accordion';
import autocomplete from '@openuxkit/themes/aura/autocomplete';
import avatar from '@openuxkit/themes/aura/avatar';
import badge from '@openuxkit/themes/aura/badge';
import base from '@openuxkit/themes/aura/base';
import blockui from '@openuxkit/themes/aura/blockui';
import breadcrumb from '@openuxkit/themes/aura/breadcrumb';
import button from '@openuxkit/themes/aura/button';
import card from '@openuxkit/themes/aura/card';
import carousel from '@openuxkit/themes/aura/carousel';
import cascadeselect from '@openuxkit/themes/aura/cascadeselect';
import checkbox from '@openuxkit/themes/aura/checkbox';
import chip from '@openuxkit/themes/aura/chip';
import colorpicker from '@openuxkit/themes/aura/colorpicker';
import confirmdialog from '@openuxkit/themes/aura/confirmdialog';
import confirmpopup from '@openuxkit/themes/aura/confirmpopup';
import contextmenu from '@openuxkit/themes/aura/contextmenu';
import css from '@openuxkit/themes/aura/css';
import datatable from '@openuxkit/themes/aura/datatable';
import dataview from '@openuxkit/themes/aura/dataview';
import datepicker from '@openuxkit/themes/aura/datepicker';
import dialog from '@openuxkit/themes/aura/dialog';
import divider from '@openuxkit/themes/aura/divider';
import dock from '@openuxkit/themes/aura/dock';
import drawer from '@openuxkit/themes/aura/drawer';
import editor from '@openuxkit/themes/aura/editor';
import fieldset from '@openuxkit/themes/aura/fieldset';
import fileupload from '@openuxkit/themes/aura/fileupload';
import floatlabel from '@openuxkit/themes/aura/floatlabel';
import galleria from '@openuxkit/themes/aura/galleria';
import iconfield from '@openuxkit/themes/aura/iconfield';
import iftalabel from '@openuxkit/themes/aura/iftalabel';
import image from '@openuxkit/themes/aura/image';
import imagecompare from '@openuxkit/themes/aura/imagecompare';
import inlinemessage from '@openuxkit/themes/aura/inlinemessage';
import inplace from '@openuxkit/themes/aura/inplace';
import inputchips from '@openuxkit/themes/aura/inputchips';
import inputgroup from '@openuxkit/themes/aura/inputgroup';
import inputnumber from '@openuxkit/themes/aura/inputnumber';
import inputotp from '@openuxkit/themes/aura/inputotp';
import inputtext from '@openuxkit/themes/aura/inputtext';
import knob from '@openuxkit/themes/aura/knob';
import listbox from '@openuxkit/themes/aura/listbox';
import megamenu from '@openuxkit/themes/aura/megamenu';
import menu from '@openuxkit/themes/aura/menu';
import menubar from '@openuxkit/themes/aura/menubar';
import message from '@openuxkit/themes/aura/message';
import metergroup from '@openuxkit/themes/aura/metergroup';
import multiselect from '@openuxkit/themes/aura/multiselect';
import orderlist from '@openuxkit/themes/aura/orderlist';
import organizationchart from '@openuxkit/themes/aura/organizationchart';
import overlaybadge from '@openuxkit/themes/aura/overlaybadge';
import paginator from '@openuxkit/themes/aura/paginator';
import panel from '@openuxkit/themes/aura/panel';
import panelmenu from '@openuxkit/themes/aura/panelmenu';
import password from '@openuxkit/themes/aura/password';
import picklist from '@openuxkit/themes/aura/picklist';
import popover from '@openuxkit/themes/aura/popover';
import progressbar from '@openuxkit/themes/aura/progressbar';
import progressspinner from '@openuxkit/themes/aura/progressspinner';
import radiobutton from '@openuxkit/themes/aura/radiobutton';
import rating from '@openuxkit/themes/aura/rating';
import ripple from '@openuxkit/themes/aura/ripple';
import scrollpanel from '@openuxkit/themes/aura/scrollpanel';
import select from '@openuxkit/themes/aura/select';
import selectbutton from '@openuxkit/themes/aura/selectbutton';
import skeleton from '@openuxkit/themes/aura/skeleton';
import slider from '@openuxkit/themes/aura/slider';
import speeddial from '@openuxkit/themes/aura/speeddial';
import splitbutton from '@openuxkit/themes/aura/splitbutton';
import splitter from '@openuxkit/themes/aura/splitter';
import stepper from '@openuxkit/themes/aura/stepper';
import steps from '@openuxkit/themes/aura/steps';
import tabmenu from '@openuxkit/themes/aura/tabmenu';
import tabs from '@openuxkit/themes/aura/tabs';
import tabview from '@openuxkit/themes/aura/tabview';
import tag from '@openuxkit/themes/aura/tag';
import terminal from '@openuxkit/themes/aura/terminal';
import textarea from '@openuxkit/themes/aura/textarea';
import tieredmenu from '@openuxkit/themes/aura/tieredmenu';
import timeline from '@openuxkit/themes/aura/timeline';
import toast from '@openuxkit/themes/aura/toast';
import togglebutton from '@openuxkit/themes/aura/togglebutton';
import toggleswitch from '@openuxkit/themes/aura/toggleswitch';
import toolbar from '@openuxkit/themes/aura/toolbar';
import tooltip from '@openuxkit/themes/aura/tooltip';
import tree from '@openuxkit/themes/aura/tree';
import treeselect from '@openuxkit/themes/aura/treeselect';
import treetable from '@openuxkit/themes/aura/treetable';
import virtualscroller from '@openuxkit/themes/aura/virtualscroller';

export default {
    ...base,
    components: {
        accordion,
        autocomplete,
        avatar,
        badge,
        blockui,
        breadcrumb,
        button,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        datatable,
        dataview,
        datepicker,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        floatlabel,
        galleria,
        iconfield,
        iftalabel,
        image,
        imagecompare,
        inlinemessage,
        inplace,
        inputchips,
        inputgroup,
        inputnumber,
        inputotp,
        inputtext,
        knob,
        listbox,
        megamenu,
        menu,
        menubar,
        message,
        metergroup,
        multiselect,
        orderlist,
        organizationchart,
        overlaybadge,
        paginator,
        panel,
        panelmenu,
        password,
        picklist,
        popover,
        progressbar,
        progressspinner,
        radiobutton,
        rating,
        ripple,
        scrollpanel,
        select,
        selectbutton,
        skeleton,
        slider,
        speeddial,
        splitbutton,
        splitter,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        tag,
        terminal,
        textarea,
        tieredmenu,
        timeline,
        toast,
        togglebutton,
        toggleswitch,
        toolbar,
        tooltip,
        tree,
        treeselect,
        treetable,
        virtualscroller
    },
    css
} satisfies Preset<AuraBaseDesignTokens>;
