import type { Preset } from '@openuxkit/themes/types';
import type { MaterialBaseDesignTokens } from './base/index.d';

import accordion from '@openuxkit/themes/material/accordion';
import autocomplete from '@openuxkit/themes/material/autocomplete';
import avatar from '@openuxkit/themes/material/avatar';
import badge from '@openuxkit/themes/material/badge';
import base from '@openuxkit/themes/material/base';
import blockui from '@openuxkit/themes/material/blockui';
import breadcrumb from '@openuxkit/themes/material/breadcrumb';
import button from '@openuxkit/themes/material/button';
import card from '@openuxkit/themes/material/card';
import carousel from '@openuxkit/themes/material/carousel';
import cascadeselect from '@openuxkit/themes/material/cascadeselect';
import checkbox from '@openuxkit/themes/material/checkbox';
import chip from '@openuxkit/themes/material/chip';
import colorpicker from '@openuxkit/themes/material/colorpicker';
import confirmdialog from '@openuxkit/themes/material/confirmdialog';
import confirmpopup from '@openuxkit/themes/material/confirmpopup';
import contextmenu from '@openuxkit/themes/material/contextmenu';
import datatable from '@openuxkit/themes/material/datatable';
import dataview from '@openuxkit/themes/material/dataview';
import datepicker from '@openuxkit/themes/material/datepicker';
import dialog from '@openuxkit/themes/material/dialog';
import divider from '@openuxkit/themes/material/divider';
import dock from '@openuxkit/themes/material/dock';
import drawer from '@openuxkit/themes/material/drawer';
import editor from '@openuxkit/themes/material/editor';
import fieldset from '@openuxkit/themes/material/fieldset';
import fileupload from '@openuxkit/themes/material/fileupload';
import floatlabel from '@openuxkit/themes/material/floatlabel';
import galleria from '@openuxkit/themes/material/galleria';
import iconfield from '@openuxkit/themes/material/iconfield';
import iftalabel from '@openuxkit/themes/material/iftalabel';
import image from '@openuxkit/themes/material/image';
import imagecompare from '@openuxkit/themes/material/imagecompare';
import inlinemessage from '@openuxkit/themes/material/inlinemessage';
import inplace from '@openuxkit/themes/material/inplace';
import inputchips from '@openuxkit/themes/material/inputchips';
import inputgroup from '@openuxkit/themes/material/inputgroup';
import inputnumber from '@openuxkit/themes/material/inputnumber';
import inputotp from '@openuxkit/themes/material/inputotp';
import inputtext from '@openuxkit/themes/material/inputtext';
import knob from '@openuxkit/themes/material/knob';
import listbox from '@openuxkit/themes/material/listbox';
import megamenu from '@openuxkit/themes/material/megamenu';
import menu from '@openuxkit/themes/material/menu';
import menubar from '@openuxkit/themes/material/menubar';
import message from '@openuxkit/themes/material/message';
import metergroup from '@openuxkit/themes/material/metergroup';
import multiselect from '@openuxkit/themes/material/multiselect';
import orderlist from '@openuxkit/themes/material/orderlist';
import organizationchart from '@openuxkit/themes/material/organizationchart';
import overlaybadge from '@openuxkit/themes/material/overlaybadge';
import paginator from '@openuxkit/themes/material/paginator';
import panel from '@openuxkit/themes/material/panel';
import panelmenu from '@openuxkit/themes/material/panelmenu';
import password from '@openuxkit/themes/material/password';
import picklist from '@openuxkit/themes/material/picklist';
import popover from '@openuxkit/themes/material/popover';
import progressbar from '@openuxkit/themes/material/progressbar';
import progressspinner from '@openuxkit/themes/material/progressspinner';
import radiobutton from '@openuxkit/themes/material/radiobutton';
import rating from '@openuxkit/themes/material/rating';
import ripple from '@openuxkit/themes/material/ripple';
import scrollpanel from '@openuxkit/themes/material/scrollpanel';
import select from '@openuxkit/themes/material/select';
import selectbutton from '@openuxkit/themes/material/selectbutton';
import skeleton from '@openuxkit/themes/material/skeleton';
import slider from '@openuxkit/themes/material/slider';
import speeddial from '@openuxkit/themes/material/speeddial';
import splitbutton from '@openuxkit/themes/material/splitbutton';
import splitter from '@openuxkit/themes/material/splitter';
import stepper from '@openuxkit/themes/material/stepper';
import steps from '@openuxkit/themes/material/steps';
import tabmenu from '@openuxkit/themes/material/tabmenu';
import tabs from '@openuxkit/themes/material/tabs';
import tabview from '@openuxkit/themes/material/tabview';
import tag from '@openuxkit/themes/material/tag';
import terminal from '@openuxkit/themes/material/terminal';
import textarea from '@openuxkit/themes/material/textarea';
import tieredmenu from '@openuxkit/themes/material/tieredmenu';
import timeline from '@openuxkit/themes/material/timeline';
import toast from '@openuxkit/themes/material/toast';
import togglebutton from '@openuxkit/themes/material/togglebutton';
import toggleswitch from '@openuxkit/themes/material/toggleswitch';
import toolbar from '@openuxkit/themes/material/toolbar';
import tooltip from '@openuxkit/themes/material/tooltip';
import tree from '@openuxkit/themes/material/tree';
import treeselect from '@openuxkit/themes/material/treeselect';
import treetable from '@openuxkit/themes/material/treetable';
import virtualscroller from '@openuxkit/themes/material/virtualscroller';

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
} satisfies Preset<MaterialBaseDesignTokens>;
