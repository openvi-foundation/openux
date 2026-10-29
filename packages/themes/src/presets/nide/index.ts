import type { Preset } from '@openuxkit/themes/types';
import type { NideBaseDesignTokens } from './base/index.d';

import accordion from '@openuxkit/themes/nide/accordion';
import autocomplete from '@openuxkit/themes/nide/autocomplete';
import avatar from '@openuxkit/themes/nide/avatar';
import badge from '@openuxkit/themes/nide/badge';
import base from '@openuxkit/themes/nide/base';
import blockui from '@openuxkit/themes/nide/blockui';
import breadcrumb from '@openuxkit/themes/nide/breadcrumb';
import button from '@openuxkit/themes/nide/button';
import card from '@openuxkit/themes/nide/card';
import carousel from '@openuxkit/themes/nide/carousel';
import cascadeselect from '@openuxkit/themes/nide/cascadeselect';
import checkbox from '@openuxkit/themes/nide/checkbox';
import chip from '@openuxkit/themes/nide/chip';
import colorpicker from '@openuxkit/themes/nide/colorpicker';
import confirmdialog from '@openuxkit/themes/nide/confirmdialog';
import confirmpopup from '@openuxkit/themes/nide/confirmpopup';
import contextmenu from '@openuxkit/themes/nide/contextmenu';
import datatable from '@openuxkit/themes/nide/datatable';
import dataview from '@openuxkit/themes/nide/dataview';
import datepicker from '@openuxkit/themes/nide/datepicker';
import dialog from '@openuxkit/themes/nide/dialog';
import divider from '@openuxkit/themes/nide/divider';
import dock from '@openuxkit/themes/nide/dock';
import drawer from '@openuxkit/themes/nide/drawer';
import editor from '@openuxkit/themes/nide/editor';
import fieldset from '@openuxkit/themes/nide/fieldset';
import fileupload from '@openuxkit/themes/nide/fileupload';
import floatlabel from '@openuxkit/themes/nide/floatlabel';
import galleria from '@openuxkit/themes/nide/galleria';
import iconfield from '@openuxkit/themes/nide/iconfield';
import iftalabel from '@openuxkit/themes/nide/iftalabel';
import image from '@openuxkit/themes/nide/image';
import imagecompare from '@openuxkit/themes/nide/imagecompare';
import inlinemessage from '@openuxkit/themes/nide/inlinemessage';
import inplace from '@openuxkit/themes/nide/inplace';
import inputchips from '@openuxkit/themes/nide/inputchips';
import inputgroup from '@openuxkit/themes/nide/inputgroup';
import inputnumber from '@openuxkit/themes/nide/inputnumber';
import inputotp from '@openuxkit/themes/nide/inputotp';
import inputtext from '@openuxkit/themes/nide/inputtext';
import knob from '@openuxkit/themes/nide/knob';
import listbox from '@openuxkit/themes/nide/listbox';
import megamenu from '@openuxkit/themes/nide/megamenu';
import menu from '@openuxkit/themes/nide/menu';
import menubar from '@openuxkit/themes/nide/menubar';
import message from '@openuxkit/themes/nide/message';
import metergroup from '@openuxkit/themes/nide/metergroup';
import multiselect from '@openuxkit/themes/nide/multiselect';
import orderlist from '@openuxkit/themes/nide/orderlist';
import organizationchart from '@openuxkit/themes/nide/organizationchart';
import overlaybadge from '@openuxkit/themes/nide/overlaybadge';
import paginator from '@openuxkit/themes/nide/paginator';
import panel from '@openuxkit/themes/nide/panel';
import panelmenu from '@openuxkit/themes/nide/panelmenu';
import password from '@openuxkit/themes/nide/password';
import picklist from '@openuxkit/themes/nide/picklist';
import popover from '@openuxkit/themes/nide/popover';
import progressbar from '@openuxkit/themes/nide/progressbar';
import progressspinner from '@openuxkit/themes/nide/progressspinner';
import radiobutton from '@openuxkit/themes/nide/radiobutton';
import rating from '@openuxkit/themes/nide/rating';
import ripple from '@openuxkit/themes/nide/ripple';
import scrollpanel from '@openuxkit/themes/nide/scrollpanel';
import select from '@openuxkit/themes/nide/select';
import selectbutton from '@openuxkit/themes/nide/selectbutton';
import skeleton from '@openuxkit/themes/nide/skeleton';
import slider from '@openuxkit/themes/nide/slider';
import speeddial from '@openuxkit/themes/nide/speeddial';
import splitbutton from '@openuxkit/themes/nide/splitbutton';
import splitter from '@openuxkit/themes/nide/splitter';
import stepper from '@openuxkit/themes/nide/stepper';
import steps from '@openuxkit/themes/nide/steps';
import tabmenu from '@openuxkit/themes/nide/tabmenu';
import tabs from '@openuxkit/themes/nide/tabs';
import tabview from '@openuxkit/themes/nide/tabview';
import tag from '@openuxkit/themes/nide/tag';
import terminal from '@openuxkit/themes/nide/terminal';
import textarea from '@openuxkit/themes/nide/textarea';
import tieredmenu from '@openuxkit/themes/nide/tieredmenu';
import timeline from '@openuxkit/themes/nide/timeline';
import toast from '@openuxkit/themes/nide/toast';
import togglebutton from '@openuxkit/themes/nide/togglebutton';
import toggleswitch from '@openuxkit/themes/nide/toggleswitch';
import toolbar from '@openuxkit/themes/nide/toolbar';
import tooltip from '@openuxkit/themes/nide/tooltip';
import tree from '@openuxkit/themes/nide/tree';
import treeselect from '@openuxkit/themes/nide/treeselect';
import treetable from '@openuxkit/themes/nide/treetable';
import virtualscroller from '@openuxkit/themes/nide/virtualscroller';

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
        datepicker,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        dataview,
        datatable,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        iftalabel,
        floatlabel,
        galleria,
        iconfield,
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
        popover,
        paginator,
        password,
        panel,
        panelmenu,
        picklist,
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
        splitter,
        splitbutton,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        textarea,
        tieredmenu,
        tag,
        terminal,
        timeline,
        togglebutton,
        toggleswitch,
        tree,
        treeselect,
        treetable,
        toast,
        toolbar,
        tooltip,
        virtualscroller
    }
} satisfies Preset<NideBaseDesignTokens>;
