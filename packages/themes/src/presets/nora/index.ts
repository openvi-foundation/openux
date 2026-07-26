import type { Preset } from '@openuxkit/themes/types';
import type { NoraBaseDesignTokens } from './base/index.d';

import accordion from '@openuxkit/themes/nora/accordion';
import autocomplete from '@openuxkit/themes/nora/autocomplete';
import avatar from '@openuxkit/themes/nora/avatar';
import badge from '@openuxkit/themes/nora/badge';
import base from '@openuxkit/themes/nora/base';
import blockui from '@openuxkit/themes/nora/blockui';
import breadcrumb from '@openuxkit/themes/nora/breadcrumb';
import button from '@openuxkit/themes/nora/button';
import card from '@openuxkit/themes/nora/card';
import carousel from '@openuxkit/themes/nora/carousel';
import cascadeselect from '@openuxkit/themes/nora/cascadeselect';
import checkbox from '@openuxkit/themes/nora/checkbox';
import chip from '@openuxkit/themes/nora/chip';
import colorpicker from '@openuxkit/themes/nora/colorpicker';
import confirmdialog from '@openuxkit/themes/nora/confirmdialog';
import confirmpopup from '@openuxkit/themes/nora/confirmpopup';
import contextmenu from '@openuxkit/themes/nora/contextmenu';
import datatable from '@openuxkit/themes/nora/datatable';
import dataview from '@openuxkit/themes/nora/dataview';
import datepicker from '@openuxkit/themes/nora/datepicker';
import dialog from '@openuxkit/themes/nora/dialog';
import divider from '@openuxkit/themes/nora/divider';
import dock from '@openuxkit/themes/nora/dock';
import drawer from '@openuxkit/themes/nora/drawer';
import editor from '@openuxkit/themes/nora/editor';
import fieldset from '@openuxkit/themes/nora/fieldset';
import fileupload from '@openuxkit/themes/nora/fileupload';
import floatlabel from '@openuxkit/themes/nora/floatlabel';
import galleria from '@openuxkit/themes/nora/galleria';
import iconfield from '@openuxkit/themes/nora/iconfield';
import iftalabel from '@openuxkit/themes/nora/iftalabel';
import image from '@openuxkit/themes/nora/image';
import imagecompare from '@openuxkit/themes/nora/imagecompare';
import inlinemessage from '@openuxkit/themes/nora/inlinemessage';
import inplace from '@openuxkit/themes/nora/inplace';
import inputchips from '@openuxkit/themes/nora/inputchips';
import inputgroup from '@openuxkit/themes/nora/inputgroup';
import inputnumber from '@openuxkit/themes/nora/inputnumber';
import inputotp from '@openuxkit/themes/nora/inputotp';
import inputtext from '@openuxkit/themes/nora/inputtext';
import knob from '@openuxkit/themes/nora/knob';
import listbox from '@openuxkit/themes/nora/listbox';
import megamenu from '@openuxkit/themes/nora/megamenu';
import menu from '@openuxkit/themes/nora/menu';
import menubar from '@openuxkit/themes/nora/menubar';
import message from '@openuxkit/themes/nora/message';
import metergroup from '@openuxkit/themes/nora/metergroup';
import multiselect from '@openuxkit/themes/nora/multiselect';
import orderlist from '@openuxkit/themes/nora/orderlist';
import organizationchart from '@openuxkit/themes/nora/organizationchart';
import overlaybadge from '@openuxkit/themes/nora/overlaybadge';
import paginator from '@openuxkit/themes/nora/paginator';
import panel from '@openuxkit/themes/nora/panel';
import panelmenu from '@openuxkit/themes/nora/panelmenu';
import password from '@openuxkit/themes/nora/password';
import picklist from '@openuxkit/themes/nora/picklist';
import popover from '@openuxkit/themes/nora/popover';
import progressbar from '@openuxkit/themes/nora/progressbar';
import progressspinner from '@openuxkit/themes/nora/progressspinner';
import radiobutton from '@openuxkit/themes/nora/radiobutton';
import rating from '@openuxkit/themes/nora/rating';
import ripple from '@openuxkit/themes/nora/ripple';
import scrollpanel from '@openuxkit/themes/nora/scrollpanel';
import select from '@openuxkit/themes/nora/select';
import selectbutton from '@openuxkit/themes/nora/selectbutton';
import skeleton from '@openuxkit/themes/nora/skeleton';
import slider from '@openuxkit/themes/nora/slider';
import speeddial from '@openuxkit/themes/nora/speeddial';
import splitbutton from '@openuxkit/themes/nora/splitbutton';
import splitter from '@openuxkit/themes/nora/splitter';
import stepper from '@openuxkit/themes/nora/stepper';
import steps from '@openuxkit/themes/nora/steps';
import tabmenu from '@openuxkit/themes/nora/tabmenu';
import tabs from '@openuxkit/themes/nora/tabs';
import tabview from '@openuxkit/themes/nora/tabview';
import tag from '@openuxkit/themes/nora/tag';
import terminal from '@openuxkit/themes/nora/terminal';
import textarea from '@openuxkit/themes/nora/textarea';
import tieredmenu from '@openuxkit/themes/nora/tieredmenu';
import timeline from '@openuxkit/themes/nora/timeline';
import toast from '@openuxkit/themes/nora/toast';
import togglebutton from '@openuxkit/themes/nora/togglebutton';
import toggleswitch from '@openuxkit/themes/nora/toggleswitch';
import toolbar from '@openuxkit/themes/nora/toolbar';
import tooltip from '@openuxkit/themes/nora/tooltip';
import tree from '@openuxkit/themes/nora/tree';
import treeselect from '@openuxkit/themes/nora/treeselect';
import treetable from '@openuxkit/themes/nora/treetable';
import virtualscroller from '@openuxkit/themes/nora/virtualscroller';

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
} satisfies Preset<NoraBaseDesignTokens>;
